import styled from "styled-components";

const TR = styled.tr`
  height: 100%
  padding: 3px;
  width: 500px;
  height: 40px;
`;

const TD = styled.td`
  padding: 3px;
  height: 10px;

  .logo {
    text-align: center;
    cursor: pointer;
    vertical-align: middle;
  }
`;

interface PropsTypes {
  examId: number;
  examName: string;
  schoolYear: number;
  subject: string;
}

const Exam = (props: PropsTypes) => {
  const { examId, examName, schoolYear, subject } = props;

  return (
    <>
      <TR>
        <TD>{examName}</TD>
        <TD> {`${schoolYear}학년`}</TD>
        <TD>{subject}</TD>
      </TR>
    </>
  );
};

export default Exam;