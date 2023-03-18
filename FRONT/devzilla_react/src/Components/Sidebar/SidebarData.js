import { RiArticleLine } from 'react-icons/ri'
import { AiOutlineComment } from 'react-icons/ai'
import { FcPieChart } from 'react-icons/fc'
import { TbPigMoney } from 'react-icons/tb'

export const SidebarData = [
    {
        title: "Artigos",
        path: "/admin/artigos",
        icon: <RiArticleLine />
    },
    {
        title: "Comentarios",
        path: "/admin/comentarios",
        icon: <AiOutlineComment />

    },
    {
        title: "Dashboard",
        path: "/admin/dashboard",
        icon: <FcPieChart />
    },
    {
        title: "Ofertas",
        path: "/admin/ofertas",
        icon: <TbPigMoney />
    },
]