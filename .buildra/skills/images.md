# Images

Call `searchImagesTool` to find real Unsplash stock photos. ALWAYS search for images BEFORE writing UI code.

## searchImagesTool API

```
searchImagesTool({ query: "search terms", orientation: "landscape" | "portrait" | "squarish" })
```

Returns an array of image objects with `url`, `alt`, `credit`, `creditUrl`.

## When to Search

Search for images for every major visual section:

| Section Type | Orientation | Example Query |
|-------------|-------------|---------------|
| Hero/banner | `landscape` | `"modern office workspace"` |
| Feature cards | `squarish` | `"data analytics dashboard"` |
| About/team | `portrait` | `"professional headshot"` |
| Product images | `squarish` | `"premium headphones product"` |
| Background | `landscape` | `"abstract gradient texture"` |
| Gallery | mixed | depends on content |

## Usage Patterns

### Hero with Background Image
```tsx
<div className="relative h-[500px] overflow-hidden">
  <img src={heroImageUrl} alt={heroImageAlt} className="absolute inset-0 h-full w-full object-cover" />
  <div className="absolute inset-0 bg-black/40" />
  <div className="relative z-10 flex h-full items-center justify-center text-white">
    <h1 className="text-5xl font-bold">Hero Title</h1>
  </div>
</div>
```

### Feature Card with Image
```tsx
<Card>
  <AspectRatio ratio={16 / 9}>
    <img src={featureImageUrl} alt={featureImageAlt} className="h-full w-full rounded-t-lg object-cover" />
  </AspectRatio>
  <CardContent className="p-4">
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>Feature description</CardDescription>
  </CardContent>
</Card>
```

### Avatar/Team Member
```tsx
<Avatar className="h-20 w-20">
  <AvatarImage src={teamImageUrl} alt={teamImageAlt} />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>
```

### Image with Credit
```tsx
<figure>
  <img src={imageUrl} alt={imageAlt} className="rounded-lg" />
  <figcaption className="mt-1 text-center">
    <a href={creditUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:underline">
      Photo by {credit}
    </a>
  </figcaption>
</figure>
```

## Rules

1. **Always search before coding** — call `searchImagesTool` for every section that needs imagery
2. **Use returned URLs directly** — don't modify Unsplash CDN URLs
3. **Include alt text** — use the `alt` field from the search result
4. **Credit photographers** — include credit link in the footer or near the image
5. **Never use placeholder images** — always use real Unsplash photos
6. **Choose appropriate orientation** — landscape for banners, squarish for cards, portrait for people
7. **Use `object-cover`** — prevents image distortion in fixed-size containers
