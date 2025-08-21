import { Button } from "@/components/ui/button";

interface Props {
  page: number;
  setPage: (p: number) => void;
  total: number;
  limit: number;
}

export function PokemonPagination({ page, setPage, total, limit }: Props) {
  const totalPages = Math.ceil(total / limit);

  return (
    <div className="flex gap-2 justify-center mt-6">
      <Button variant="outline" className="flex gap-2 bg-gray-200 text-black hover:bg-gray-300" disabled={page === 1} onClick={() => setPage(page - 1)}>
        Prev
      </Button>
      <span className="px-2">Page {page} of {totalPages}</span>
      <Button variant="outline" className="flex gap-2 bg-gray-200 text-black hover:bg-gray-300" disabled={page === totalPages} onClick={() => setPage(page + 1)}>
        Next
      </Button>
    </div>
  );
}
