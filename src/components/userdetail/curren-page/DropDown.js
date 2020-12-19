import React, { useRef, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

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
        <DropdownItem>
          <input
            className="ssh"
            ref={textAreaRef}
            defaultValue={repo.ssh_url}
          />
          {document.queryCommandSupported("copy") && (
            <div>
              <button onClick={copyToClipboard}>Copy</button>
              {copySuccess}
            </div>
          )}
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
