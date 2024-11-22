import CardSecretComponent from "../RoomSecretComponent/CardRoomSecretComponent";
import styles from "./RoomsSecretContainer.module.css";
import { useRooms } from "../../context/RoomsContext";

export default function RoomsContainer() {
     const { rooms, loading, error } = useRooms();

     if (loading) return <div>Cargando...</div>;
     if (error) return <div>{error}</div>;

     return (
          <div className={styles.secretsContainer}>
               {rooms.map((room) => (
                    <CardSecretComponent
                         key={room.id}
                         roomId={room.id}
                         title={room.title}
                         created_at={room.created_at}
                         description={room.description}
                         isSensored={room.is_sensored}
                    />
               ))}
          </div>
     );
}
