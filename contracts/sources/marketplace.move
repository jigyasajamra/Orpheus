module NFTMarketplace {
    use Aptos::NFT;
    use Aptos::Coin;
    use ArtistRegistration;

    // Represents each NFT created for a song
    struct SongNFT has key {
        song_name: vector<u8>,
        price: u64,
        owner: address,
    }

    // Allows registered artists to mint an NFT representing a song
    public fun mint_nft(account: &signer, song_name: vector<u8>, price: u64) acquires SongNFT {
        assert!(ArtistRegistration::is_registered_artist(Account::address_of(account)), "Only registered artists can mint NFTs");

        let nft = SongNFT { song_name, price, owner: Account::address_of(account) };
        move_to(account, nft);
    }

    // Allows a buyer to purchase an NFT from an artist
    public fun buy_nft(buyer: &signer, artist: address, nft_id: u64, price: u64) acquires SongNFT {
        assert!(Coin::withdraw(buyer, price), "Insufficient funds for NFT purchase");
        
        let nft = borrow_global_mut<SongNFT>(artist);
        assert!(nft.price == price, "Incorrect purchase amount");
        
        nft.owner = Account::address_of(buyer);
        
        // Transfer payment to the artist's wallet
        Coin::transfer(artist, price);
    }
}