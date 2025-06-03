export default function Layout(props) {
    
    const { children } = props
    
    const header = (
        <header>
            <h1 className="text-gradient">GymPal</h1>
            <p><strong>The 30 Simple Workouts Program</strong></p>
        </header>
    )

    const footer = (
        <footer>
        </footer>
    )

    return (
        <>
            { header }
            { children }
            { footer }
        </>

    )
}