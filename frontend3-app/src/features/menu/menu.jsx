export const Menu = () => {
    return (
        <>
            <p>
                Här kommer det att finnas färdiga menyer upplagda.
                Ett objekt renderas per recept.
            </p>

            <article style={{ paddingBottom: '20px', border: 'solid black 1px', borderRadius: '25px', width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
                <h2>Receptnamn</h2>
                <p>Beskrivning av menyn</p>
                <p>(Nedan visas alla rätter, med namnet på varje rätt)</p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid black 1px', padding: '5px', width: '90%', marginBottom: '5px' }}>
                    <p>Här visas namnet på första rätten</p>
                    <p style={{ fontSize: 'x-small' }}>kortare beskrivning om rätten</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid black 1px', padding: '5px', width: '90%', marginBottom: '5px' }}>
                    <p>Här visas namnet på andra rätten</p>
                    <p style={{ fontSize: 'x-small' }}>kortare beskrivning om rätten</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid black 1px', padding: '5px', width: '90%', marginBottom: '5px' }}>
                    <p>Här visas namnet på trejde rätten</p>
                    <p style={{ fontSize: 'x-small' }}>kortare beskrivning om rätten</p>
                </div>
            </article >

            <article style={{ paddingBottom: '20px', border: 'solid black 1px', borderRadius: '25px', width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
                <h2>Receptnamn</h2>
                <p>Beskrivning av menyn</p>
                <p>(Nedan visas alla rätter, med namnet på varje rätt)</p>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid black 1px', padding: '5px', width: '90%', marginBottom: '5px' }}>
                    <p>Här visas namnet på första rätten</p>
                    <p style={{ fontSize: 'x-small' }}>kortare beskrivning om rätten</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid black 1px', padding: '5px', width: '90%', marginBottom: '5px' }}>
                    <p>Här visas namnet på andra rätten</p>
                    <p style={{ fontSize: 'x-small' }}>kortare beskrivning om rätten</p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', border: 'solid black 1px', padding: '5px', width: '90%', marginBottom: '5px' }}>
                    <p>Här visas namnet på trejde rätten</p>
                    <p style={{ fontSize: 'x-small' }}>kortare beskrivning om rätten</p>
                </div>
            </article >
        </>
    )
}