import { useState, useEffect } from 'react';
import { sanityClient, fallbackData } from '@/lib/sanity';

interface UseSanityDataOptions {
  query: string;
  fallback?: any;
}

export function useSanityData<T>({ query, fallback }: UseSanityDataOptions) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await sanityClient.fetch(query);
        setData(result);
      } catch (err) {
        console.warn('Sanity fetch failed:', err);
        setError(err as Error);
        setData(fallback || null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, fallback]);

  return { data, loading, error };
}

// Hook for hero section
export function useHeroData() {
  const [data, setData] = useState(fallbackData.hero);
  
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const result = await sanityClient.fetch(`
          *[_type == "hero"][0] {
            label,
            headline,
            subheadline,
            ctaText,
            secondaryCtaText
          }
        `);
        if (result) setData(result);
      } catch (err) {
        console.log('Using fallback hero data');
      }
    };
    fetchHero();
  }, []);

  return data;
}

// Hook for services
export function useServicesData() {
  const [data, setData] = useState(fallbackData.services);
  
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const result = await sanityClient.fetch(`
          *[_type == "services"][0] {
            label,
            headline,
            description,
            "items": items[] {
              title,
              description,
              "image": image.asset->url
            }
          }
        `);
        if (result) setData(result);
      } catch (err) {
        console.log('Using fallback services data');
      }
    };
    fetchServices();
  }, []);

  return data;
}

// Hook for project stages
export function useStagesData() {
  const [data, setData] = useState(fallbackData.stages);
  
  useEffect(() => {
    const fetchStages = async () => {
      try {
        const result = await sanityClient.fetch(`
          *[_type == "stages"][0] {
            label,
            headline,
            description,
            caption,
            "items": items[] {
              num,
              title
            }
          }
        `);
        if (result) setData(result);
      } catch (err) {
        console.log('Using fallback stages data');
      }
    };
    fetchStages();
  }, []);

  return data;
}

// Hook for featured project
export function useFeaturedProjectData() {
  const [data, setData] = useState(fallbackData.featuredProject);
  
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const result = await sanityClient.fetch(`
          *[_type == "featuredProject"][0] {
            headline,
            subheadline,
            client,
            scope,
            value,
            ctaText,
            "image": image.asset->url
          }
        `);
        if (result) setData(result);
      } catch (err) {
        console.log('Using fallback featured project data');
      }
    };
    fetchProject();
  }, []);

  return data;
}

// Hook for about section
export function useAboutData() {
  const [data, setData] = useState(fallbackData.about);
  
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const result = await sanityClient.fetch(`
          *[_type == "about"][0] {
            label,
            headline,
            ctaText,
            "cards": cards[] {
              title,
              description,
              "image": image.asset->url
            }
          }
        `);
        if (result) setData(result);
      } catch (err) {
        console.log('Using fallback about data');
      }
    };
    fetchAbout();
  }, []);

  return data;
}

// Hook for projects grid
export function useProjectsData() {
  const [data, setData] = useState(fallbackData.projects);
  
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const result = await sanityClient.fetch(`
          *[_type == "projects"][0] {
            label,
            headline,
            ctaText,
            "items": items[] {
              title,
              subtitle,
              "image": image.asset->url
            }
          }
        `);
        if (result) setData(result);
      } catch (err) {
        console.log('Using fallback projects data');
      }
    };
    fetchProjects();
  }, []);

  return data;
}

// Hook for contact section
export function useContactData() {
  const [data, setData] = useState(fallbackData.contact);
  
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const result = await sanityClient.fetch(`
          *[_type == "contact"][0] {
            label,
            headline,
            description,
            email,
            phone,
            location,
            ctaText
          }
        `);
        if (result) setData(result);
      } catch (err) {
        console.log('Using fallback contact data');
      }
    };
    fetchContact();
  }, []);

  return data;
}
