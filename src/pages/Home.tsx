
export function Home() {

  function handleCreate() {
    // navegar a Create form
  }
  
  function handleEdit(p: any) {
    // navegar a Edit form con p.id
  }
  
  function handleDelete(p: any) {
    // llamar servicio delete y luego refetch/react-query
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading pokemons</div>;

  return (
  );
}
