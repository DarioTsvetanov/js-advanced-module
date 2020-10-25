function solve(input) {

    let systems = [];

    for (let line of input) {

        let [system, component, subcomponent] = line.split(' | ');

        let searchedSystemsByName = systems.find(obj => obj.systemName == system);

        if (!searchedSystemsByName) {

            systems.push({

                systemName: system,
                componentsArray: [{

                    componentName: component,
                    subcomponentsArray: [subcomponent]
                }]
            });
        }
        else {

            let searchedComponent = searchedSystemsByName.componentsArray.find(obj => obj.componentName == component);

            if (!searchedComponent) {

                searchedSystemsByName.componentsArray.push({

                    componentName: component,
                    subcomponentsArray: [subcomponent]
                });
            }
            else searchedComponent.subcomponentsArray.push(subcomponent);
        }
    }

    systems.sort((a, b) => b.componentsArray.length - a.componentsArray.length || a.systemName.localeCompare(b.systemName));

    for (let system of systems) {
    
        console.log(system.systemName);

        system.componentsArray.sort((a, b) => b.subcomponentsArray.length - a.subcomponentsArray.length);

        for (let component of system.componentsArray) {
            
            console.log(`|||${component.componentName}`);

            for (let subcomponent of component.subcomponentsArray) {
            
                console.log(`||||||${subcomponent}`);
            }
        }
    }
}

solve(['SULS | Main Site | Home Page',
'SULS | Main Site | Login Page',
'SULS | Main Site | Register Page',
'SULS | Judge Site | Login Page',
'SULS | Judge Site | Submittion Page',
'Lambda | CoreA | A23',
'SULS | Digital Site | Login Page',
'Lambda | CoreB | B24',
'Lambda | CoreA | A24',
'Lambda | CoreA | A25',
'Lambda | CoreC | C4',
'Indice | Session | Default Storage',
'Indice | Session | Default Security']);