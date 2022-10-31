export default function randQuestion (props) {
    const {randQ} = props;
    console.log(randQ);
        return(
            <div>
                <h3>{randQ.Category}</h3>
                <h3>{randQ.Points}</h3>
                <h3>{randQ.Answer}</h3>
            </div>
        )
}