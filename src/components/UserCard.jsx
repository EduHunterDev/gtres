import styles from './UserCard.module.css'

function UserCard({ name, age, profession, avatarUrl, isMentor = false, children }) {
    return (
        <article className={styles.card}>
            {avatarUrl && <img className={styles.avatar} src={avatarUrl} alt={`Foto de ${name}`} />}
            <div className={styles.content}>
                <div className={styles.heading}>
                    <h2>{name}</h2>
                    {isMentor && <span className={styles.badge}>Mentor</span>}
                </div>
                {profession && <p className={styles.profession}>{profession}</p>}
                {age != null && <p className={styles.age}>{age} anos</p>}
                {children}
            </div>
        </article>
    )
}

export default UserCard
