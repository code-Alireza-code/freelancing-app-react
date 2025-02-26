function Empty({ resourceName }: { resourceName: string }) {
  return (
    <p className="font-bold text-secondary-700">
      هیچ {resourceName} یافت نشد !
    </p>
  );
}
export default Empty;
