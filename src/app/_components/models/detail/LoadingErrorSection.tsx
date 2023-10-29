import LoadingHasbulla from "@/components/Loaders/LoadingHasbulla";

interface Props {
  loading: boolean;
  error: boolean;
}

export default function LoadingErrorSection({ loading, error }: Props) {
  if (loading) {
    return <LoadingHasbulla/>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  return null;
}
