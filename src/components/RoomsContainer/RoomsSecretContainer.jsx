import CardSecretComponent from "../RoomSecretComponent/CardRoomSecretComponent";
import styles from "./RoomsSecretContainer.module.css";
import PropTypes from "prop-types";

export default function RoomsContainer({ rooms, error, loading }) {
     if (loading) return <div>Cargando...</div>;
     if (error) return <div>{error}</div>;

     return (
          <div className={styles.secretsContainer}>
               {rooms.map((room) => (
                    <CardSecretComponent key={room.id} roomId={room.id} title={room.title} created_at={room.created_at} />
               ))}
          </div>
     );
}
RoomsContainer.propTypes = {
     rooms: PropTypes.array,
     error: PropTypes.string,
     loading: PropTypes.bool.isRequired,
};
