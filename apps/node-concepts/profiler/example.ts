type CurrentLoggedInUser = {
    name: string;
    age: number;
  };
  function isAdult(user: CurrentLoggedInUser): boolean {
    return user.age >= 18;
  }
  const justine = {
    name: 'Justine',
    age: 23,
  } satisfies CurrentLoggedInUser;
  const isJustineAnAdult = isAdult(justine);

  console.log( "isJustineAnAdult",isJustineAnAdult)