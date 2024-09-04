import React, { useState } from "react";
import { useModifyOptionalExcursionsTrip } from "../../hooks/useModifyOptionalExcursionsTrip";
import classes from "./OptionalExcursionsTrip.module.scss";

type OptionalExcursionsTripProps = {
  excursions: Array<{ description: string }>;
  tripId: number;
};

const OptionalExcursionsTrip: React.FC<OptionalExcursionsTripProps> = ({
  excursions,
  tripId,
}) => {
  const [isAddingExcursion, setIsAddingExcursion] = useState<boolean>(false);
  const [editedExcursions, setEditedExcursions] =
    useState<Array<{ description: string }>>(excursions);
  const [editingExcursionIndex, setEditingExcursionIndex] = useState<
    number | null
  >(null);
  const modifyExcursions = useModifyOptionalExcursionsTrip();

  const handleAddExcursion = () => {
    setIsAddingExcursion(true);
    setEditedExcursions([...editedExcursions, { description: "" }]);
    setEditingExcursionIndex(editedExcursions.length);
  };

  const handleCancel = () => {
    setIsAddingExcursion(false);
    setEditedExcursions(excursions);
    setEditingExcursionIndex(null);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const updatedExcursions = [...editedExcursions];
    updatedExcursions[index].description = e.target.value;
    setEditedExcursions(updatedExcursions);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    modifyExcursions({
      trip_id: tripId,
      excursions: editedExcursions,
    });
    setIsAddingExcursion(false);
    setEditingExcursionIndex(null);
  };

  const handleEdit = (index: number) => {
    setEditingExcursionIndex(index);
  };

  return (
    <div className={classes["optional-excursions"]}>
      <div className={classes["name-of-excursion"]}>
        Wycieczki fakultatywne:
      </div>
      <form onSubmit={handleSubmit}>
        <ul>
          {editedExcursions.map((excursion, index) => (
            <li key={index} onClick={() => handleEdit(index)}>
              {editingExcursionIndex === index ? (
                <input
                  type="text"
                  value={excursion.description}
                  onChange={(e) => handleChange(e, index)}
                />
              ) : (
                excursion.description
              )}
            </li>
          ))}
        </ul>
        <div className={classes["actions"]}>
          <button type="button" onClick={handleAddExcursion}>
            Dodaj wycieczkę
          </button>
          {(isAddingExcursion || editingExcursionIndex !== null) && (
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

export default OptionalExcursionsTrip;
