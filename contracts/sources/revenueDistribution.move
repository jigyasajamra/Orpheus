module RevenueDistribution {
    use Aptos::Coin;
    use ArtistRegistration;
    use Aptos::Account;

    // Tracks listenership metrics for each artist
    resource struct ArtistMetrics {
        wallet: address,
        streaming_time: u64, // Total listening time in seconds
    }

    // Resource to hold the total monthly revenue
    resource struct MonthlyRevenue {
        amount: u64,
    }

    // Adds monthly subscription revenue to the total pool
    public fun route_subscription_fee(_account: &signer, subscription_fee: u64) acquires MonthlyRevenue {
        let revenue = borrow_global_mut<MonthlyRevenue>(Account::address_of(_account));
        revenue.amount = revenue.amount + subscription_fee;
    }

    // Updates streaming data for artists. Called periodically to record metrics.
    public fun update_artist_metrics(wallet: address, streaming_time: u64) acquires ArtistMetrics {
        let metrics = borrow_global_mut<ArtistMetrics>(wallet);
        metrics.streaming_time += streaming_time;
    }

    // Calculates revenue distribution and pays artists based on listenership
    public fun distribute_revenue() acquires MonthlyRevenue {
        let revenue = borrow_global_mut<MonthlyRevenue>(Account::address_of(@0));
        let total_revenue = revenue.amount;
        
        // Get list of registered artists and their streaming times
        let artists = ArtistRegistration::get_all_artists();
        let total_streaming_time = artists.iter().fold(0, |acc, artist| acc + artist.streaming_time);
        
        // Distribute revenue proportionately to each artist
        for artist in artists {
            let share = (artist.streaming_time * total_revenue) / total_streaming_time;
            Coin::transfer(artist.wallet, share);
        }

        // Reset the monthly revenue
        revenue.amount = 0;
    }
}