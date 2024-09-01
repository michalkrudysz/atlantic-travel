import { useState } from "react";
import classes from "./MainInfo.module.scss";
import { Trip } from "../../hooks/useTrips";
import { TripDetails } from "../../hooks/useTripDetails";
import { useUpdateMainInfo } from "../../hooks/useUpdateMainInfo";

type MainInfoProps = {
  activeTrip: Trip | null;
  tripDetails: TripDetails | undefined;
};

export default function MainInfo({ activeTrip, tripDetails }: MainInfoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    trip_id: activeTrip?.trip_id || 0,
    start_date: activeTrip?.start_date || "",
    end_date: activeTrip?.end_date || "",
    additional_costs: tripDetails?.additional_costs || 0,
    description: tripDetails?.description || "",
    priority: activeTrip?.priority || 0,
    title: activeTrip?.title || "",
  });

  const updateMainInfoMutation = useUpdateMainInfo();

  const toggleEdit = () => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setFormData({
        trip_id: activeTrip?.trip_id || 0,
        start_date: activeTrip?.start_date || "",
        end_date: activeTrip?.end_date || "",
        additional_costs: tripDetails?.additional_costs || 0,
        description: tripDetails?.description || "",
        priority: activeTrip?.priority || 0,
        title: activeTrip?.title || "",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateMainInfoMutation.mutate(formData, {
      onSuccess: (updatedFields) => {
        setIsEditing(false);
      },
    });
  };

  return (
    <div className={classes["main-info"]}>
      {!isEditing ? (
        <>
          <div className={classes["title-info"]}>{activeTrip?.title}</div>
          <div className={classes["date-range"]}>
            <div className={classes["date-label"]}>Data:</div>
            <div className={classes["date-values"]}>
              <span>{activeTrip?.start_date}</span>
              <span>-</span>
              <span>{activeTrip?.end_date}</span>
            </div>
          </div>
          <div className={classes["price-info"]}>
            <div className={classes["price-label"]}>Cena podstawowa:</div>
            <div className={classes.price}>{tripDetails?.price_per_person}</div>
          </div>
          <div className={classes["additional-costs-info"]}>
            <div className={classes["additional-costs-label"]}>
              Cena dodatkowa:
            </div>
            <div className={classes["additional-costs"]}>
              {tripDetails?.additional_costs}
            </div>
          </div>
          <div className={classes["description-info"]}>
            <div className={classes["description-label"]}>Dodatkowy opis:</div>
            <div className={classes["description"]}>
              {tripDetails?.description}
            </div>
          </div>
          <div className={classes["priority-info"]}>
            <div className={classes["priority-label"]}>
              Priorytet wyświetlania:
            </div>
            <div className={classes["priority"]}>{activeTrip?.priority}</div>
          </div>
        </>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={classes["title-info"]}>
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </div>
          <div className={classes["date-range"]}>
            <div className={classes["date-label"]}>Data:</div>
            <div className={classes["date-values"]}>
              <input
                type="date"
                value={formData.start_date}
                onChange={(e) =>
                  setFormData({ ...formData, start_date: e.target.value })
                }
              />
              <span>-</span>
              <input
                type="date"
                value={formData.end_date}
                onChange={(e) =>
                  setFormData({ ...formData, end_date: e.target.value })
                }
              />
            </div>
          </div>
          <div className={classes["price-info"]}>
            <div className={classes["price-label"]}>Cena podstawowa:</div>
            <div className={classes.price}>
              <input
                type="number"
                value={formData.additional_costs}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additional_costs: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <div className={classes["additional-costs-info"]}>
            <div className={classes["additional-costs-label"]}>
              Cena dodatkowa:
            </div>
            <div className={classes["additional-costs"]}>
              <input
                type="number"
                value={formData.additional_costs}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    additional_costs: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
          <div className={classes["description-info"]}>
            <div className={classes["description-label"]}>Dodatkowy opis:</div>
            <div className={classes["description"]}>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
              ></textarea>
            </div>
          </div>
          <div className={classes["priority-info"]}>
            <div className={classes["priority-label"]}>
              Priorytet wyświetlania:
            </div>
            <div className={classes["priority"]}>
              <input
                type="number"
                value={formData.priority}
                onChange={(e) =>
                  setFormData({ ...formData, priority: Number(e.target.value) })
                }
              />
            </div>
          </div>
          <div className={classes["actions"]}>
            <button type="submit">Zapisz</button>
            <button type="button" onClick={toggleEdit}>
              Anuluj
            </button>
          </div>
        </form>
      )}
      {!isEditing && (
        <div className={classes["actions"]}>
          <button onClick={toggleEdit}>Edytuj</button>
        </div>
      )}
    </div>
  );
}
