import { useEffect, useState } from "react";
import { QuestionModel } from "../../../../models/Game";
import "./index.scss";

interface TNGQuestionProps {
    question: QuestionModel
}
const TNGQuestion = ({ question }: TNGQuestionProps) => {
    const [qSize, setQSize] = useState('');
    useEffect(() => {
        setQSize(question.content.length > 80 ? 'lg' : '');
    }, [question])

    return <div className={`tng-question ${qSize}`}>
        <div className="tng-question-body">{question.content}</div>
    </div>
}
export default TNGQuestion