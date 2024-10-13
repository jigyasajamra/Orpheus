module ArtistRegistration {
    use Aptos::Account;

    // Resource representing a registered artist
    resource struct Artist {
        wallet: address,
        registered: bool,
    }

    // Registers a new artist with their wallet address
    public fun register_artist(account: &signer) acquires Artist {
        let wallet = Account::address_of(account);
        assert!(!exists<Artist>(wallet), "Artist already registered");

        let artist = Artist { wallet, registered: true };
        move_to(account, artist);
    }

    // Checks if the given wallet address belongs to a registered artist
    public fun is_registered_artist(artist_address: address): bool acquires Artist {
        exists<Artist>(artist_address)
    }

    // Returns a list of all registered artists
    public fun get_all_artists(): vector<Artist> acquires Artist {
        let artists = vector::empty<Artist>();
        for artist in list_all_addresses<Artist>() {
            let artist_data = borrow_global<Artist>(artist);
            vector::push_back(&mut artists, artist_data);
        }
        artists
    }
}