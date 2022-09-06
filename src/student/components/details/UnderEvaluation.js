import React, { useState, useEffect } from "react";
import Modal from "react-modal";

// import Delete from "./ModalElements/Delete";
// import Edit from "./ModalElements/Edit";
// import NewButtons from "./ModalElements/NewButtons";
// import NewLink from "./ModalElements/NewLink";
// import Text from "./ModalElements/Text";
// import NewFile from "./ModalElements/NewFile";

/************modal**************/
Modal.defaultStyles.overlay.backgroundColor = "rgba(74, 73, 73, 0.7)";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "1.5rem",
    background: "#FFFFFF",
  },
};
Modal.setAppElement("#root");

const UnderEvaluation = (props) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState("delete");
  const [editType, setEditType] = useState("file");
  function openModal(event) {
    //setModalType(event.target.name);
    setIsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
  function closeModal() {
    setIsOpen(false);
  }

  function changeToNewButtons() {
    setModalType("proceed");
  }

  function changeModalForSol(type) {
    console.log(type);
    setModalType(type);
  }

  /************modal**************/

  var question = props.question;

  const [viewSolButton, setView] = useState(false);

  // useEffect(() => {
  //   question = props.question;
  // }, [props.question]);

  console.log("rendered evaluationsec" + question.question_no);

  // function solutionChangeHandler(event) {
  //   console.log(event.target.value);
  //   setSolution(event.target.value);
  // }

  useEffect(() => {
    setView(false);
  }, [props.question]);

  function showSolution(event) {
    setView(true);
  }

  /*let sub;
  if (question.submissions)
    sub = question.submissions[question.submissions.length - 1];
  else sub = null;
  useEffect(() => {
    setView(false);
  }, [sub]);
  if (question.submissions) {
    var dateObj = new Date(sub.updatedAt);
    var month = dateObj.getUTCMonth(); //months from 0-11
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    var newdate = day + " " + monthNames[month] + ", " + year;
  } else newdate = "-";*/

  /*****************getting updated data 
  const [file, setFile] = useState(null);
  const [link, setLink] = useState(null);
  function getFile(file) {
    setFile(file);
    console.log(file);
    // setModalType("newFile");
  }

  function getLink(link) {
    setLink(link);
    //console.log(link);
    // setModalType("newFile");
  }*/

  /*****************getting updated data */

  function changeToSubPending(event) {
    props.reSubmit(true);
  }

  return (
    <div className="sub-pending-sec">
      {/* <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {modalType === "delete" ? (
          <Delete close={closeModal}  />
        ) : modalType === "edit" ? (
          <Edit close={closeModal} proceed={changeToNewButtons} />
        ) : modalType === "proceed" && editType == "file" ? (
          <NewFile close={closeModal} sendFile={getFile} />
        ) : modalType === "proceed" && editType == "text" ? (
          <Text close={closeModal}  />
        ) : (
          <NewLink close={closeModal} passLink={getLink} />
        )}
      </Modal> */}
      <h3>Question</h3>
      <p>{question.question}</p>

      {/* {!viewSolButton && ( */}
      <div className="flex-column">
        <h3>Status of Submission</h3>

        <div className="white-area">status</div>
        <div className="button-flex">
          <button onClick={changeToSubPending} className="button-flex">
            View you solution
          </button>
        </div>
      </div>
      {/* )}
      {viewSolButton && ( 
          <div className="flex-column">
          <h3>
            Solution You Submitted <span>(updated on {newdate})</span>
          </h3>
          <div className="white-area">
            {sub !== null && sub.filename && (
              <>
                {sub.filename.map((fname, index) => (
                  <React.Fragment key={index}>
                    <div className="white-area-element">
                      <span>{fname}</span>
                      <section>
                        <a
                          href={`https://do4t98vdpdesj.cloudfront.net/${sub.filelink[index]}`}
                          target="_blank"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
                          </svg>
                        </a>
                        <button
                          className="edit-button"
                          onClick={(event) => {
                            setModalType("edit");
                            setEditType("file");
                            openModal(event);
                          }}
                          name="edit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z" />
                          </svg>
                        </button>
                        <button
                          className="delete-button"
                          onClick={(event) => {
                            setModalType("delete");
                            openModal(event);
                          }}
                          name="delete"
                        >
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                          </svg>
                        </button>
                      </section>
                    </div>
                  </React.Fragment>
                ))}
              </>
            )}
            {sub !== null && sub.text && (
              <div className="white-area-element">
                <span>{sub.text.slice(0, 20)}</span>
                <section>
                  <a href="{}">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z" />
                    </svg>
                  </a>
                  <button
                    className="edit-button"
                    onClick={(event) => {
                      setModalType("edit");
                      setEditType("text");
                      openModal(event);
                    }}
                    name="edit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z" />
                    </svg>
                  </button>
                  <button
                    className="delete-button"
                    onClick={(event) => {
                      setModalType("delete");
                      openModal(event);
                    }}
                    name="delete"
                  >
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                    </svg>
                  </button>
                </section>
              </div>
            )}
            {sub !== null && sub.link && (
              <>
                {sub.link.map((l, index) => (
                  <React.Fragment key={index}>
                    <div className="white-area-element">
                      <span>{l}</span>
                      <section>
                        <a href={l}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" />
                          </svg>
                        </a>
                        <button
                          className="edit-button"
                          onClick={(event) => {
                            setModalType("edit");
                            setEditType("link");
                            openModal(event);
                          }}
                          name="edit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19.769 9.923l-12.642 12.639-7.127 1.438 1.438-7.128 12.641-12.64 5.69 5.691zm1.414-1.414l2.817-2.82-5.691-5.689-2.816 2.817 5.69 5.692z" />
                          </svg>
                        </button>
                        <button
                          className="delete-button"
                          onClick={(event) => {
                            setModalType("delete");
                            openModal(event);
                          }}
                          name="delete"
                        >
                          <svg
                            width="24"
                            height="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M19 24h-14c-1.104 0-2-.896-2-2v-16h18v16c0 1.104-.896 2-2 2m3-19h-20v-2h6v-1.5c0-.827.673-1.5 1.5-1.5h5c.825 0 1.5.671 1.5 1.5v1.5h6v2zm-12-2h4v-1h-4v1z" />
                          </svg>
                        </button>
                      </section>
                    </div>
                  </React.Fragment>
                ))}
              </>
            )}
          </div>
          <p>
            <strong>Note:</strong>the file has been submitted Successfully
          </p>
        </div>
        <div></div>
      )} */}
    </div>
  );
};
export default UnderEvaluation;
