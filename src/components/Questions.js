export default function Questions (props) {
    const {randQuestion} = props;
    console.log(randQuestion);
        return(
            <div>
                <h2>{randQuestion.Category}</h2>
                <h2>{randQuestion.Points}</h2>
                <h2>{randQuestion.Answer}</h2>
            </div>
        )
}