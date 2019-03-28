import React from "react";

export default class Rules extends React.Component {
  render() {
    return (
      <div className="Rules">
        <strong>GUIDELINES</strong>
        <p>
          Welcome to the test. As part of your initiation, you will receive 3
          questions which you can solve in any order you desire. Every time you
          solve a question, that question will go away, paving way for a new
          question which is random among users.
        </p>
        <p>
          There are 3 levels of questions. You will need to solve X in Level 1
          to get Level 2, Y in Level 2 to get to Level 3 and once you solve Z in
          Level 3, you will start receiving random questions from all left
          unsolved.
        </p>
        <p>
          Answers should be submitted in all lowercase and with no whitespaces.
          For example, if answer is "Cicada 3301 is here", then write
          "cicada3301ishere" in the answer field.
        </p>
        <p>The contest will end on 06:00 PM IST on 30th March, 2019.</p>
      </div>
    );
  }
}