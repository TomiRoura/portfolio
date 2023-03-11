import styles from './Spinner.module.scss'

const Spinner = () => {
    return (
        <div className={styles.lds_roller}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

export default Spinner