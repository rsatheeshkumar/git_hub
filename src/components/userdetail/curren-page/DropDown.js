import React, { useRef, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { GrCopy } from "react-icons/gr";

import "./dropDown.scss";

const DropDown = ({ repo }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const [copySuccess, setCopySuccess] = useState("");
  const textAreaRef = useRef(null);
  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand("copy");
    e.target.focus();
    setCopySuccess();
  }

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>SSH</DropdownToggle>
      <DropdownMenu>
        <DropdownItem className="drop-down-key">
          <input
            className="ssh"
            ref={textAreaRef}
            defaultValue={repo.ssh_url}
          />
          {document.queryCommandSupported("copy") && (
            <div>
              <span className="button" onClick={copyToClipboard}>
                <GrCopy />
              </span>
              {copySuccess}
            </div>
          )}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
