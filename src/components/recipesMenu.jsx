import { MegaMenu } from 'primereact/megamenu';
import RecipeCard from './recipeCard';

const RecipesMenu = () => {
   
    const items = [
            {
                label: 'Videos', icon: 'pi pi-fw pi-video',
            },
            {
                label: 'Users', icon: 'pi pi-fw pi-users',
            },
            {
                label: 'Events', icon: 'pi pi-fw pi-calendar',
            },
            {
                label: 'Settings', icon: 'pi pi-fw pi-cog',
            }
        ];
    


   
        return (
            <div class="recipesmenu">
                <div class="navbar">
                    <MegaMenu model={items} /></div>
                <div class="recipes">
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    <RecipeCard></RecipeCard>
                    </div></div>
      

        );
    
}
export default RecipesMenu;