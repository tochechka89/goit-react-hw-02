import css from './Feedback.module.css'

export default function Feedback({ check: { good, neutral, bad }, positive }) {
    return (
        <div>
            <p className={css.param}>Good: {good}</p>
            <p className={css.param}>Neutral: {neutral}</p>
            <p className={css.param}>Bad: {bad}</p>
             {positive !== undefined && (
        <p className={css.param}>Positive: {positive}%</p>
      )}
       </div> 
    );
}