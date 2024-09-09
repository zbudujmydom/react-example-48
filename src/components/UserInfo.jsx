const UserInfo = (props) => {
  return (
    <div>
      <p>Hello {props.userName}</p>
      <p>Your age: {props.age}</p>
    </div>
  );
};

// const UserInfo = ({ userName, age }) => {
//   return (
//     <div>
//       <p>Hello {userName}</p>
//       <p>Your age: {age}</p>
//     </div>
//   );
// };

export default UserInfo;
