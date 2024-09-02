import { useState, useEffect } from "react";
import classes from "./DaysTrip.module.scss";
import { useUpdateDay } from "../../hooks/useUpdateDay";

type DaysTripProps = {
  tripDays: any[];
  tripId: number;
};

export default function DaysTrip({ tripDays, tripId }: DaysTripProps) {
  const [editingDayNumber, setEditingDayNumber] = useState<string | null>(null);
  const [days, setDays] = useState(tripDays);
  const updateDay = useUpdateDay();

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
    setFormData({
      ...formData,
      day_number: day.day_number,
      description: day.description,
      new_day_number: day.day_number,
    });
  };

  const handleCancel = () => {
    setEditingDayNumber(null);
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
      <div className={classes["add-day"]}>Dodaj dzień</div>
    </div>
  );
}
