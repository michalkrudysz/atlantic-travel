import React, { useState } from "react";
import classes from "./IncludedExcursionsTrip.module.scss";

type IncludedExcursionsTripProps = {
  excursions: Array<{ description: string }>;
};

const IncludedExcursionsTrip: React.FC<IncludedExcursionsTripProps> = ({
  excursions,
}) => {
  const [isAddingExcursion, setIsAddingExcursion] = useState<boolean>(false);
  const [editedExcursions, setEditedExcursions] =
    useState<Array<{ description: string }>>(excursions);
  const [editingExcursionIndex, setEditingExcursionIndex] = useState<
    number | null
  >(null);

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
    console.log("Zapisano zmiany:", editedExcursions);
    setIsAddingExcursion(false);
    setEditingExcursionIndex(null);
  };

  const handleEdit = (index: number) => {
    setEditingExcursionIndex(index);
  };

  return (
    <div className={classes["included-excursions"]}>
      <div className={classes["name-of-excursion"]}>Wycieczki wliczone:</div>
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

export default IncludedExcursionsTrip;
