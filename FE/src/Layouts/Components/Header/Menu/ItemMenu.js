
import { HelpIcon, LogoutIcon, MoonIcon, PoinionIcon, SettingIcon,  } from "~/components/Icons/Icon"

export const menuUser = {
    icon: {
        0: SettingIcon,
        1: HelpIcon,
        2: MoonIcon,
        3: PoinionIcon,
        4: LogoutIcon
    },
    items: {
        0: 'Cài đặt & quyền riêng tư',
        1: 'Trợ giúp & hỗ trợ',
        2: 'Màn hình & trợ năng',
        3: {
            title: 'Đóng góp ý kiến',
            childrenTitle: 'CTRL B'
        },
        4: 'Đăng xuất'
    },
    to: {
        0: '/',
        1: 'logo',
        2: 'tronang',
        3: '/donggop',
        4: '/login'
    },
    childrenItem: {
        endIcon: [0,1,2],
        children: {
            3: 'CTRL B'
        }
    },
    endItem: {
        0: 'Quyền riêng tư',
        1: 'Điều khoản',
        2: 'Quảng cáo',
        3: 'Lựa chọn quảng cáo',
        4: 'Cookie',
        5: 'Xem thêm'
    }
}