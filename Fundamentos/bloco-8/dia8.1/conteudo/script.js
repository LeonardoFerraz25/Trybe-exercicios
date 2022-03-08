const wakeup= () => 'acordando !!';

const breakfast = () => 'Bora tomar um café !!';

const ahMimir = () => 'Partiu dormir !!';

const doingThings = (func) => console.log(func());

doingThings(wakeup);
doingThings(breakfast);
doingThings(ahMimir);
