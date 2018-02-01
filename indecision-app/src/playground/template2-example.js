const user = {
    name: 'David Scroggins',
    age: 35,
    location: 'Chicago, IL'
};

function getLocation(locationIn) {
    if (locationIn) {
        return <p>Location: {locationIn}</p>;
    }
}

const template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);