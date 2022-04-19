function solution(orders, course) {
  let menu = new Map();
  const makeMenu = (menuMap, targetMenu, menuNum, idx, curMenu) => {
    if (curMenu.length === menuNum) {
      let menuStr = curMenu.sort().join('');

      menu.set(menuStr, (menu.get(menuStr) || 0) + 1);
    }
    for (let i = idx; i < targetMenu.length; i++) {
      makeMenu(menuMap, targetMenu, menuNum, i + 1, [...curMenu, targetMenu[i]]);
    }
  };

  orders.map((order) => {
    course.map((courseNum) => makeMenu(menu, order, courseNum, 0, []));
  });
  menu = [...menu.entries()].filter((menuItem) => menuItem[1] > 1);

  let ans = [];

  course.map((courseNum) => {
    let filteredMenu = menu.filter((menuItem) => menuItem[0].length === courseNum).sort((a, b) => b[1] - a[1]);
    let maxCnt = filteredMenu.length ? filteredMenu[0][1] : 0;
    filteredMenu.filter((menuItem) => menuItem[1] === maxCnt).map((menu) => ans.push(menu[0]));
  });

  return ans.sort();
}
