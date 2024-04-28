import getCurrentUser from './actions/getCurrentUser';
import getListings, { IListingParams } from './actions/getListings';

import Container from './components/container';
import EmptyState from './components/EmptyState';
import ListingCard from './components/listings/ListingCard';
import { SafeListing } from './types';

interface HomeProps {
  searchParams: IListingParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const currentUser = await getCurrentUser();
  const listings = await getListings(searchParams);

  if (listings.length === 0) {
    return <EmptyState showReset />;
  }

  return (
    <Container>
      <div className="pt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            currentUser={currentUser}
            data={listing}
          />
        ))}
      </div>
    </Container>
  );
};

export default Home;
