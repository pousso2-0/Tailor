import { NavItem } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const navList = [
    {
        name: "Home",
        link: "/",
        children: null
    },
    {
        name: "Blog",
        link: "#blogData",
        children: [
            {
                name: "Blog Grid",
                link: "/dashboard/blog/blog-grid"
            },
            {
                name: "Blog List",
                link: "/dashboard/blog/blog-list"
            },
            {
                name: "Blog Detail",
                link: "/dashboard/blog/blog-detail"
            }
        ]
    },
    {
        name: "Store",
        link: "#storeData",
        children: [
            {
                name: "Category Grid",
                link: "/dashboards/store/store-category-grid"
            },
            {
                name: "Category List",
                link: "/dashboards/store/store-category-list"
            },
            {
                name: "Store Detail",
                link: "/dashboards/store/store-detail"
            },
            {
                name: "Product Detail",
                link: "/dashboards/store/product-detail"
            },
            {
                name: "Checkout",
                link: "/dashboards/store/store-checkout"
            }
        ]
    }
];

const NavList = ({ active, setActive }) => {
    return (
        <ul className="iq-nav-menu list-unstyled">
            {
                navList.map(({ name, link, children }, index) => {
                    return children == null ? (
                        <NavLink 
                            key={index} 
                            active={active} 
                            setActive={setActive} 
                            name={name} 
                            link={link} 
                        />
                    ) : (
                        <NavLink 
                            key={index} 
                            active={active} 
                            setActive={setActive} 
                            name={name} 
                            link={link}
                        >
                            <ul className="iq-header-sub-menu list-unstyled collapse shadow" id={`collapse-${index}`}>
                                {
                                    children.map(({ name, link }, childIndex) => (
                                        <NavItem 
                                            key={childIndex}
                                            active={active} 
                                            setActive={setActive} 
                                            name={name} 
                                            link={link} 
                                        />
                                    ))
                                }
                            </ul>
                        </NavLink>
                    );
                })
            }
        </ul>
    );
}

export default NavList;
