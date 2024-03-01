import { memo, useState } from 'react';
import PropTypes from 'prop-types';

const AddPokemonForm = memo(function AddPokemonForm({ onSubmit }) {
  console.log('form');
  const [qtyPokemon, setQtyPokemon] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const qtyToAdd = formData.get('qty');

    onSubmit(qtyToAdd);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-2">
        <button
          type="button"
          onClick={() =>
            setQtyPokemon((prevQtyPokemon) =>
              prevQtyPokemon - 1 <= 0 ? 0 : prevQtyPokemon - 1
            )
          }
          className="px-3 py-1 bg-fuchsia-400 text-fuchsia-900 rounded-md hover:bg-fuchsia-500 transition-all"
        >
          –
        </button>
        <input
          type="number"
          name="qty"
          className="text-center"
          onChange={(e) => {
            setQtyPokemon(Number(e.currentTarget.value));
          }}
          value={qtyPokemon}
        />

        <button
          type="button"
          onClick={() => setQtyPokemon((prevQtyPokemon) => prevQtyPokemon + 1)}
          className="px-3 py-1 bg-fuchsia-400 text-fuchsia-900 rounded-md hover:bg-fuchsia-500 transition-all"
        >
          +
        </button>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-3 py-2 bg-fuchsia-400 text-fuchsia-900 rounded-md hover:bg-fuchsia-500 transition-all"
        >
          Submit
        </button>
      </div>
    </form>
  );
});

export default AddPokemonForm;

AddPokemonForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
