/**
 * Shared competition ranking. Name sort is display-only;
 * equal total + tiebreaker history share a competition rank.
 */
(function (global) {
  function rankingKey(player, getTotal) {
    const raw = getTotal ? getTotal(player) : player.total;
    const total = typeof raw === 'number' && Number.isFinite(raw) ? raw : 0;
    const history = Array.isArray(player.tbHistory)
      ? player.tbHistory.filter(n => typeof n === 'number')
      : [];
    return [total].concat(history);
  }

  function compareRankingKeys(aKey, bKey) {
    const a = aKey || [];
    const b = bKey || [];
    const len = Math.max(a.length, b.length);
    for (let i = 0; i < len; i++) {
      const av = a[i];
      const bv = b[i];
      if (av == null && bv == null) continue;
      if (av == null) return 1;
      if (bv == null) return -1;
      if (bv !== av) return bv - av;
    }
    return 0;
  }

  function comparePlayers(a, b, getTotal) {
    const cmp = compareRankingKeys(rankingKey(a, getTotal), rankingKey(b, getTotal));
    if (cmp !== 0) return cmp;
    return String(a.name || '').localeCompare(String(b.name || ''));
  }

  function sortPlayers(players, getTotal) {
    return (players || []).slice().sort((a, b) => comparePlayers(a, b, getTotal));
  }

  function playersTied(a, b, getTotal) {
    return compareRankingKeys(rankingKey(a, getTotal), rankingKey(b, getTotal)) === 0;
  }

  function assignRanks(players, getTotal) {
    const sorted = sortPlayers(players, getTotal);
    let rank = 0;
    let prevKey = null;
    const rows = sorted.map((p, i) => {
      const key = rankingKey(p, getTotal);
      if (!prevKey || compareRankingKeys(prevKey, key) !== 0) {
        rank = i + 1;
        prevKey = key;
      }
      return { player: p, rank };
    });
    const counts = {};
    rows.forEach(r => { counts[r.rank] = (counts[r.rank] || 0) + 1; });
    return rows.map(r => {
      const copy = Object.assign({}, r.player);
      copy.rank = r.rank;
      copy.tied = counts[r.rank] > 1;
      return copy;
    });
  }

  global.DaggerDieCompRanking = {
    rankingKey,
    compareRankingKeys,
    comparePlayers,
    sortPlayers,
    playersTied,
    assignRanks
  };
})(typeof window !== 'undefined' ? window : globalThis);
