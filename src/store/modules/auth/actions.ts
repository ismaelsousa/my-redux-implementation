export const changeNameAuth = ({ name }: { name: string }) => {
  return {
    type: "Test",
    payload: {
      name,
    },
  };
};
