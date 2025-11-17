<script>
import tailwindDefaults from '@gitlab/ui/tailwind.defaults';
import TailwindClassValue from './tailwind_class_value.vue';

export default {
  components: {
    TailwindClassValue,
  },
  data() {
    return {
      prefix: tailwindDefaults.prefix,
      headingClasses: [
        'gl-heading-display',
        'gl-heading-1',
        'gl-heading-1-fixed',
        'gl-heading-2',
        'gl-heading-2-fixed',
        'gl-heading-3',
        'gl-heading-3-fixed',
        'gl-heading-4',
        'gl-heading-4-fixed',
        'gl-heading-5',
        'gl-heading-5-fixed',
        'gl-heading-6',
        'gl-heading-6-fixed',
        'gl-heading-scale-100',
        'gl-heading-scale-100-fixed',
        'gl-heading-scale-200',
        'gl-heading-scale-200-fixed',
        'gl-heading-scale-300',
        'gl-heading-scale-300-fixed',
        'gl-heading-scale-400',
        'gl-heading-scale-400-fixed',
        'gl-heading-scale-500',
        'gl-heading-scale-500-fixed',
        'gl-heading-scale-600',
        'gl-heading-scale-600-fixed',
        'gl-heading-scale-700',
        'gl-heading-scale-700-fixed',
        'gl-heading-scale-800',
        'gl-heading-scale-800-fixed',
      ],
      backgroundColor: this.flattenThemeObject(tailwindDefaults.theme.backgroundColor),
      borderColor: this.flattenThemeObject(tailwindDefaults.theme.borderColor),
      textColor: this.flattenThemeObject(tailwindDefaults.theme.textColor),
      spacing: this.flattenThemeObject(tailwindDefaults.theme.spacing),
      fontFamily: this.flattenThemeObject(tailwindDefaults.theme.fontFamily),
      fontSize: this.flattenThemeObject(tailwindDefaults.theme.fontSize),
      fontWeight: this.flattenThemeObject(tailwindDefaults.theme.fontWeight),
      lineHeight: this.flattenThemeObject(tailwindDefaults.theme.lineHeight),
      borderRadius: this.flattenThemeObject(tailwindDefaults.theme.borderRadius),
      boxShadow: this.flattenThemeObject(tailwindDefaults.theme.boxShadow),
      opacity: this.flattenThemeObject(tailwindDefaults.theme.opacity),
    };
  },
  methods: {
    flattenThemeObject(obj, prefix = '') {
      return Object.entries(obj).flatMap(([key, value]) => {
        const fullKey = prefix ? `${prefix}-${key}` : key;
        return typeof value === 'object' && value !== null
          ? this.flattenThemeObject(value, fullKey)
          : { key: fullKey, value };
      });
    },
  },
};
</script>
<template>
  <div>
    <h2 class="gl-heading-2">Colors</h2>

    <section v-if="backgroundColor.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Background Color</h3>
      <note>
        See
        <a href="/product-foundations/layout#content-containers">layout content containers</a> for
        background color usage.
      </note>
      <grid columns="4">
        <li v-for="item in backgroundColor" :key="item.key">
          <div class="gl-h-8 gl-rounded-default" :style="{ 'background-color': item.value }"></div>
          <tailwind-class-value :prefix="prefix" property="bg" :item="item" />
        </li>
      </grid>
    </section>

    <section v-if="textColor.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Text Color</h3>
      <note>
        See
        <a href="/product-foundations/type-fundamentals#text-color">typography fundamentals</a> for
        text color usage.
      </note>
      <grid columns="4">
        <li v-for="item in textColor" :key="item.key">
          <div class="gl-text-[2rem] gl-leading-1" :style="{ color: item.value }">Aa</div>
          <tailwind-class-value :prefix="prefix" property="text" :item="item" />
        </li>
      </grid>
    </section>

    <h2 class="gl-heading-2">Border</h2>

    <section v-if="borderColor.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Border Color</h3>
      <note>
        See
        <a href="/product-foundations/layout#borders-and-dividers">layout borders and dividers</a>
        for border color usage.
      </note>
      <grid columns="4">
        <li v-for="item in borderColor" :key="item.key">
          <div
            class="gl-h-8 gl-border-2 gl-border-solid"
            :style="{ 'border-color': item.value }"
          ></div>
          <tailwind-class-value :prefix="prefix" property="border" :item="item" />
        </li>
      </grid>
    </section>

    <section v-if="borderRadius.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Border Radius</h3>
      <grid columns="4">
        <li v-for="item in borderRadius" :key="item.key">
          <div
            class="gl-border gl-h-8 gl-border-strong gl-bg-strong"
            :style="{ 'border-radius': item.value }"
          ></div>
          <tailwind-class-value :prefix="prefix" property="rounded" :item="item" />
        </li>
      </grid>
    </section>

    <h2 class="gl-heading-2">Spacing</h2>

    <section v-if="spacing.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Padding</h3>
      <note>
        See
        <a href="/product-foundations/spacing">spacing</a> for padding usage.
      </note>
      <grid columns="1">
        <li v-for="item in spacing" :key="item.key">
          <div
            class="gl-border gl-border-strong gl-bg-strong"
            :style="{ height: item.value, width: item.value }"
          ></div>
          <tailwind-class-value :prefix="prefix" property="p" :item="item" />
        </li>
      </grid>
    </section>

    <section v-if="spacing.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Margin</h3>
      <note>
        See
        <a href="/product-foundations/spacing">spacing</a> for margin usage.
      </note>
      <grid columns="1">
        <li v-for="item in spacing" :key="item.key">
          <div
            class="gl-border gl-border-strong gl-bg-strong"
            :style="{ height: item.value, width: item.value }"
          ></div>
          <tailwind-class-value :prefix="prefix" property="m" :item="item" />
        </li>
      </grid>
    </section>

    <h2 class="gl-heading-2">Typography</h2>

    <section v-if="headingClasses.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Headings</h3>
      <note>
        See
        <a href="/product-foundations/type-headings">typography headings</a> for heading usage.
      </note>
      <grid columns="1">
        <li v-for="className in headingClasses" :key="className">
          <div :class="className">The quick brown fox jumps over the lazy dog</div>
          <div class="gl-mt-3 gl-font-monospace gl-text-sm gl-text-strong">
            {{ className }}
          </div>
        </li>
      </grid>
    </section>

    <section v-if="fontFamily.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Font Family</h3>
      <note>
        See
        <a href="/product-foundations/type-fundamentals#typefaces">typography fundamentals</a> for
        font-family usage.
      </note>
      <grid columns="1">
        <li v-for="item in fontFamily" :key="item.key">
          <div class="gl-leading-1" :style="{ 'font-family': item.value }">
            The quick brown fox jumps over the lazy dog
          </div>
          <tailwind-class-value :prefix="prefix" property="font" :item="item" />
        </li>
      </grid>
    </section>

    <section v-if="fontSize.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Font Size</h3>
      <note>
        See
        <a href="/product-foundations/type-fundamentals#type-scales">typography fundamentals</a> for
        font-size usage.
      </note>
      <grid columns="1">
        <li v-for="item in fontSize" :key="item.key">
          <div class="gl-leading-1" :style="{ 'font-size': item.value }">
            The quick brown fox jumps over the lazy dog
          </div>
          <tailwind-class-value :prefix="prefix" property="text" :item="item" />
        </li>
      </grid>
    </section>

    <section v-if="fontWeight.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Font Weight</h3>
      <note>
        See
        <a href="/product-foundations/type-fundamentals#font-weight">typography fundamentals</a> for
        font-weight usage.
      </note>
      <grid columns="1">
        <li v-for="item in fontWeight" :key="item.key">
          <div :style="{ 'font-weight': item.value }">
            The quick brown fox jumps over the lazy dog
          </div>
          <tailwind-class-value :prefix="prefix" property="font" :item="item" />
        </li>
      </grid>
    </section>

    <section v-if="lineHeight.length" class="gl-mb-7">
      <h3 class="gl-heading-3">Line Height</h3>
      <note>
        See
        <a href="/product-foundations/type-fundamentals#line-height">typography fundamentals</a> for
        line-height usage.
      </note>
      <grid columns="1">
        <li v-for="item in lineHeight" :key="item.key">
          <div :style="{ 'line-height': item.value }">
            <div>The quick brown fox jumps over the lazy dog</div>
            <div>The quick brown fox jumps over the lazy dog</div>
          </div>
          <tailwind-class-value :prefix="prefix" property="leading" :item="item" />
        </li>
      </grid>
    </section>

    <section v-if="boxShadow.length" class="gl-mb-7">
      <h2 class="gl-heading-2">Box Shadow</h2>
      <note>
        See
        <a href="/product-foundations/elevation">elevation</a> for box shadow usage.
      </note>
      <grid columns="4">
        <li v-for="item in boxShadow" :key="item.key">
          <div class="gl-h-8 gl-rounded-default" :style="{ 'box-shadow': item.value }"></div>
          <tailwind-class-value :prefix="prefix" property="shadow" :item="item" />
        </li>
      </grid>
    </section>

    <section v-if="opacity.length" class="gl-mb-7">
      <h2 class="gl-heading-2">Opacity</h2>
      <grid columns="4">
        <li v-for="item in opacity" :key="item.key">
          <div
            class="gl-h-8 gl-rounded-default gl-bg-neutral-1000 dark:gl-bg-neutral-0"
            :style="{ opacity: item.value }"
          ></div>
          <tailwind-class-value :prefix="prefix" property="opacity" :item="item" />
        </li>
      </grid>
    </section>
  </div>
</template>
