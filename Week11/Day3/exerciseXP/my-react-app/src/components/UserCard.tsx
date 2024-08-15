export const UserCard = (props: { name?: string; age?: number }) => {
  const { name, age } = props;

  const displayName = name ? name : "Name wasn't provided";
  const displayAge = age !== undefined ? age : "Age wasn't provided";

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "16px",
        borderRadius: "8px",
        width: "200px",
      }}
    >
      <h2>User Card</h2>
      <p>
        <strong>Name:</strong> {displayName}
      </p>
      <p>
        <strong>Age:</strong> {displayAge}
      </p>
    </div>
  );
};
