import { useState, useEffect } from "react";
import classes from "./DaysTrip.module.scss";
import { useUpdateDay } from "../../hooks/useUpdateDay";
import { useCreateDay } from "../../hooks/useCreateDay";

type DaysTripProps = {
  tripDays: any[];
  tripId: number;
};

export default function DaysTrip({ tripDays, tripId }: DaysTripProps) {
  const [editingDayNumber, setEditingDayNumber] = useState<string | null>(null);
  const [isAddingDay, setIsAddingDay] = useState<boolean>(false);
  const [days, setDays] = useState(tripDays);
  const updateDay = useUpdateDay();
  const createDay = useCreateDay();

  useEffect(() => {
    setDays(tripDays);
  }, [tripDays]);

  const initialFormData = {
    trip_id: tripId,
    day_number: "",
    description: "",
    new_day_number: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleEdit = (day: any) => {
    setEditingDayNumber(day.day_number);
    setIsAddingDay(false);
    setFormData({
      ...initialFormData,
      day_number: day.day_number,
      description: day.description,
      new_day_number: day.day_number,
    });
  };

  const handleAddDay = () => {
    setEditingDayNumber(null);
    setIsAddingDay(true);
    setFormData({
      ...initialFormData,
      day_number: (days.length + 1).toString(),
      description: "",
    });
  };

  const handleCancel = () => {
    setEditingDayNumber(null);
    setIsAddingDay(false);
    setFormData(initialFormData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAddingDay) {
      createDay(
        {
          ...formData,
          description: formData.description,
          day_number: formData.day_number,
        },
        {
          onSuccess: (newDay) => {
            setDays([...days, newDay]);
            setIsAddingDay(false);
            setFormData(initialFormData);
          },
        }
      );
    } else {
      updateDay(formData, {
        onSuccess: () => {
          const updatedDays = days.map((day) =>
            day.day_number === formData.day_number
              ? {
                  ...day,
                  description: formData.description,
                  day_number: formData.new_day_number || day.day_number,
                }
              : day
          );
          setDays(updatedDays);
          setEditingDayNumber(null);
          setFormData(initialFormData);
        },
      });
    }
  };

  return (
    <div className={classes["days"]}>
      {days.map((day, index) => (
        <div key={index} className={classes["day"]}>
          {editingDayNumber === day.day_number ? (
            <form onSubmit={handleSubmit}>
              <div className={classes["day-number"]}>
                <label>Dzień:</label>
                <input
                  type="text"
                  name="new_day_number"
                  value={formData.new_day_number}
                  onChange={handleChange}
                />
              </div>
              <div className={classes["day-description"]}>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className={classes["actions"]}>
                <button type="submit">Zapisz</button>
                <button type="button" onClick={handleCancel}>
                  Anuluj
                </button>
              </div>
            </form>
          ) : (
            <>
              <div className={classes["day-number"]}>
                Dzień: {day.day_number}
              </div>
              <div className={classes["day-description"]}>
                {day.description}
              </div>
              <div className={classes["actions"]}>
                <button onClick={() => handleEdit(day)}>Edytuj</button>
              </div>
            </>
          )}
        </div>
      ))}
      {!isAddingDay && (
        <div className={classes["add-day"]} onClick={handleAddDay}>
          Dodaj dzień
        </div>
      )}
      {isAddingDay && (
        <div className={classes["day"]}>
          <form onSubmit={handleSubmit}>
            <div className={classes["day-number"]}>
              <label>Dzień:</label>
              <input
                type="text"
                name="day_number"
                value={formData.day_number}
                onChange={handleChange}
              />
            </div>
            <div className={classes["day-description"]}>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className={classes["actions"]}>
              <button type="submit">Zapisz</button>
              <button type="button" onClick={handleCancel}>
                Anuluj
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
