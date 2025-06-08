const NotificationItem = () => {
  return (
    <>
      <div className="d-flex">
        <div>
          <div className="userImg">
            <span className="rounded-circle">
              <img
                src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="dropDownInfo">
          <h4>
            <span>
              <b>Mahmudul</b> added to his favorite list
              <b>Leather belt steve madden</b>
            </span>
          </h4>
          <p className="txtSky">few seconds ago!</p>
        </div>
      </div>
    </>
  );
};
export default NotificationItem;
