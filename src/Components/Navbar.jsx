function Navbar() {
  return (
    <>
      <div className="nav">
          <i class="fa-regular fa-lightbulb icon">
          <span>Notes</span></i>

          <i class="fa-regular fa-bell icon">
          <span>Reminders</span></i>

          <i class="fa-solid fa-pencil icon">
          <span>Edit Lables</span></i>

          <i class="fa-solid fa-trash icon">
          <span>Archive</span></i>

          <i class="fa-solid fa-box-archive icon">
          <span>Bin</span></i>
      </div>
    </>
  );
}
export default Navbar;
