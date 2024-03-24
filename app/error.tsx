"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <p className="my-16 text-center text-red-500">
        Data fetching in server failed.
      </p>
    </div>
  );
}
