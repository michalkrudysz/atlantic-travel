import { useState } from "react";
import { useModifyServicesTrip } from "../../hooks/useModifyServicesTrip";
import classes from "./ServicesTrip.module.scss";

type ServicesTripProps = {
  services: Array<{ description: string }>;
  tripId: number;
};

const ServicesTrip: React.FC<ServicesTripProps> = ({ services, tripId }) => {
  const [isAddingService, setIsAddingService] = useState<boolean>(false);
  const [editedServices, setEditedServices] =
    useState<Array<{ description: string }>>(services);
  const [editingServiceIndex, setEditingServiceIndex] = useState<number | null>(
    null
  );
  const modifyServices = useModifyServicesTrip();

  const handleAddService = () => {
    setIsAddingService(true);
    setEditedServices([...editedServices, { description: "" }]);
    setEditingServiceIndex(editedServices.length);
  };

  const handleCancel = () => {
    setIsAddingService(false);
    setEditedServices(services);
    setEditingServiceIndex(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedServices = [...editedServices];
    updatedServices[index].description = e.target.value;
    setEditedServices(updatedServices);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    modifyServices({
      trip_id: tripId,
      services: editedServices,
    });
    setIsAddingService(false);
    setEditingServiceIndex(null);
  };

  const handleEdit = (index: number) => {
    setIsAddingService(true);
    setEditingServiceIndex(index);
  };

  return (
    <div className={classes["services"]}>
      <div className={classes["name-of-service"]}>Świadczenia:</div>
      <form onSubmit={handleSubmit}>
        <ul>
          {editedServices.map((service, index) => (
            <li key={index} onClick={() => handleEdit(index)}>
              {editingServiceIndex === index ? (
                <input
                  type="text"
                  value={service.description}
                  onChange={(e) => handleChange(e, index)}
                />
              ) : (
                service.description
              )}
            </li>
          ))}
        </ul>
        <div className={classes["actions"]}>
          <button type="button" onClick={handleAddService}>
            Dodaj świadczenie
          </button>
          {(isAddingService || editingServiceIndex !== null) && (
            <>
              <button type="submit">Zapisz</button>
              <button type="button" onClick={handleCancel}>
                Anuluj
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ServicesTrip;
