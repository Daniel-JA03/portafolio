import ExperienceItem from "./ExperienceItem.astro";
import { EXPERIENCE } from "./Experience.astro";
import { Fragment } from "astro/jsx-runtime";

<Fragment>
<ol class="relative border-s border-gray-200 dark:border-gray-700">
{EXPERIENCE.map(experience => (
<Fragment><li class="mb-10 ms-4">
<ExperienceItem {...experience} />
</li></Fragment>
))}

</ol>

</Fragment>;
