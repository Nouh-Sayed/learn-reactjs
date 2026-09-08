

function Props() {
    const hours = new Date().getHours();
    const FirstName = 'nouh';
    const LastName = 'sayed';

    let Timeday = `good night ${FirstName} ${LastName}`;

    if (hours >= 6 && hours < 12) {
        Timeday = `good morning ${FirstName} ${LastName}`;
    } else if (hours >= 12 && hours < 18) {
        Timeday = `good day ${FirstName} ${LastName}`;
    } else if (hours >= 18 && hours < 24) {
        Timeday = `good evening ${FirstName} ${LastName}`;
    }

    return (
        <div>
            <h3>{Timeday}</h3>
            {/* <h2>hello {FirstName + " " + LastName}</h2> */}
        </div>
    );
}

export default Props

