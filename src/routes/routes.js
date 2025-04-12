import Board from '~/pages/Boards/_id'
import Catalog from '~/pages/Catalog/_id'
import HTRisks from '~/pages/Catalog/Details/HTRisks'
import RodeBattle from '~/pages/Catalog/Details/RodeBattle'
import SpaceArena from '~/pages/Catalog/Details/SpaceArena'
import KoiCareClinic from '~/pages/Catalog/KoiCareClinic/KoiCareClinic.component'
import Profile from '~/pages/Profile'


export const publicRoutes = [
  { path: 'land', component: Board, loader: null },
  { path: 'profile', component: Profile, loader: null },
  {
    path: 'catalog', component: Catalog, loader: null, children: [
      { path: 'spaceArena', component: SpaceArena, loader: null },
      { path: 'hackingTheRisks', component: HTRisks, loader: null },
      { path: 'RodeBattle', component: RodeBattle, loader: null },
      { path: 'KoiCareClinic', component: KoiCareClinic, loader: null }
    ]
  }
]

export const childRoutes = {
  'catalog': [
    { path: 'spaceArena', component: SpaceArena, loader: null },
    { path: 'hackingTheRisks', component: HTRisks, loader: null },
    { path: 'RodeBattle', component: RodeBattle, loader: null },
    { path: 'KoiCareClinic', component: KoiCareClinic, loader: null }
  ]
}