module SubscriptionManagement {
    use Aptos::Coin;
    use Aptos::Account;
    use RevenueDistribution;
    use Aptos::Timestamp;

    // Resource to represent each subscriber with expiry information
    resource struct Subscription {
        active: bool,
        expiry: u64, // Expiry in Unix timestamp
    }

    // Initializes subscription payment for a user and activates subscription
    public fun subscribe(account: &signer, monthly_fee: u64) {
        let user_address = Account::address_of(account);
        // Verify payment and deduct monthly fee
        assert!(Coin::withdraw(account, monthly_fee), "Subscription fee not paid");

        let current_time = Timestamp::now_seconds();
        let expiry_time = current_time + (30 * 24 * 60 * 60); // Subscription valid for 30 days
        let new_subscription = Subscription { active: true, expiry: expiry_time };
        
        // Store subscription details on-chain
        move_to(account, new_subscription);

        // Route subscription funds to the Revenue Distribution contract
        RevenueDistribution::route_subscription_fee(user_address, monthly_fee);
    }

    // Checks if a user's subscription is still active
    public fun is_subscribed(user: address): bool {
        let subscription = borrow_global<Subscription>(user);
        let current_time = Timestamp::now_seconds();
        subscription.active && subscription.expiry > current_time
    }

    // Allows users to renew their subscription
    public fun renew_subscription(account: &signer, monthly_fee: u64) {
        let user_address = Account::address_of(account);
        assert!(Coin::withdraw(account, monthly_fee), "Subscription renewal fee not paid");

        let current_time = Timestamp::now_seconds();
        let subscription = borrow_global_mut<Subscription>(user_address);
        
        // Update expiry date by extending the subscription
        subscription.expiry = max(subscription.expiry, current_time) + (30 * 24 * 60 * 60);
        
        // Route the renewal fee to Revenue Distribution
        RevenueDistribution::route_subscription_fee(user_address, monthly_fee);
    }
}