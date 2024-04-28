import EmptyState from '../components/EmptyState';

import getCurrentUser from '../actions/getCurrentUser';

import getReservations from '../actions/getReservations';
import TripsClient from './TripsClient';

//This is server component
const TripsPage = async () => {
  //Get the current user
  const currentUser = await getCurrentUser();

  //If no current user show this
  if (!currentUser) {
    return <EmptyState title="Unauthorized" subtitle="Please login!" />;
  }

  //Get the reservations of the current user
  const reservations = await getReservations({ userId: currentUser.id });

  //If no reservations show this
  if (reservations.length === 0) {
    return (
      <EmptyState
        title="No trips found"
        subtitle="Looks like you have'nt reserved any trips"
      />
    );
  }

  //Else show this
  return <TripsClient reservations={reservations} currentUser={currentUser} />;
};

export default TripsPage;
